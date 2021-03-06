import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'
import Modal from 'react-modal'
import QuestionService from '../Services/QuestionService'
import RecordService from '../Services/RecordService'

class TestBox extends Component {
    constructor() {
        super()
        this.state = {
            modalIsOpen: false,
            canClose: true,
            question: {
                answers: []
            },
            testRecord: {
                userEmail: "",
                category: "",
                score: 100,
                userAnswers: []
            },
            questions: [],
            questionsCounter: 0

        }


    }
    setmodalIsOpen(param) {
        this.setState({
            modalIsOpen: param
        })
    }

    next() {
        var answerVal;

        if (this.state.questionsCounter > 0) {
            this.state.questions.push(this.state.question.id)
            answerVal = this.findCheckedAnswer()
            this.updateScore(answerVal)
            this.updateDifficulty(answerVal)
            
        } else {
            this.setState({ canClose: false })
            const { user } = this.props.auth0;
            this.setState({ testRecord: { ...this.state.testRecord, userEmail: user.email, category: this.props.title } });
            QuestionService.getRandomQuestion(this.props.title, 1).then((res) => {
                this.setState({ question: res.data })

            });
        }
        this.setState({ questionsCounter: this.state.questionsCounter + 1 })

    }
    didQuestionAppear(q) {
        if (q.id === this.state.question.id) {
            return true
        }
        for (var i = 0, length = this.state.questions.length; i < length; i++) {
            if (q.id === this.state.questions[i])
                return true;
        }
        this.setState({ question: q })
        return false;

    }


    findCheckedAnswer() {
        var radios = document.getElementsByName('radAnswer');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {

                this.state.testRecord.userAnswers.push(radios[i].id)
                radios[i].checked = false
                return radios[i].value === 'true';
            }
        }
    }
    findAnyCheckedRadio(){
        var radios = document.getElementsByName('radAnswer');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                return true;
            }
        }
        return false;
    }

    updateScore(answerVal) {

        if (this.state.question.difficulty === 1 && !answerVal) {
            this.setState({ testRecord: { ...this.state.testRecord, score: this.state.testRecord.score - 10 } });
        } if (this.state.question.difficulty === 2 && !answerVal) {
            this.setState({ testRecord: { ...this.state.testRecord, score: this.state.testRecord.score - 7 } });
        } if (this.state.question.difficulty === 3 && !answerVal) {
            this.setState({ testRecord: { ...this.state.testRecord, score: this.state.testRecord.score - 4 } });
        }
    }
    updateDifficulty(answerVal) {
        switch (this.state.question.difficulty) {
            case 1:
                if (answerVal) {
                    this.bringQuestionFromDB(2)
                } else {
                    this.bringQuestionFromDB(1)
                }
                break;
            case 2:
                if (answerVal) {
                    this.bringQuestionFromDB(3)
                } else {
                    this.bringQuestionFromDB(1)
                }
                break;
            case 3:
                if (answerVal) {
                    this.bringQuestionFromDB(3)
                } else {
                    this.bringQuestionFromDB(2)
                }
                break;
            default:
                break;
        }
    }

    bringQuestionFromDB(diff) {
        var q
        QuestionService.getRandomQuestion(this.props.title, diff).then((res) => {
            q = res.data;
            if (this.didQuestionAppear(q))
                this.bringQuestionFromDB(diff)
        });
    }

    finishTest() {
        RecordService.postTestRecord(this.state.testRecord)
        this.state.testRecord.userAnswers.splice(0, this.state.testRecord.userAnswers.length)
        this.state.questions.splice(0, this.state.questions.length)
        this.setState({ testRecord: { ...this.state.testRecord, score: 100 } });
        this.setState({ questionsCounter: 0 })
        this.setState({ canClose: true })
        this.setState({ modalIsOpen: false })
    }
    close() {
        if (this.state.canClose) {
            this.setState({ modalIsOpen: false });
        }
    }

    render() {
        let modalContent;

        if (this.state.questionsCounter === 0) {//start test
            modalContent = 
            <div className="modal">
                <p>?????????? 10 ?????????? ?????????????????? ?????????? ???????? ??????????. ?????? ???????? ???? ???????? ???????????? ?????????????? ?????????? ?????????? ???? ?????? ??????????. ?????????? ?????????? ???????? ?????????? ???????????? ???? ???????????? "????????" ?????????????? ???? ???????????? ???????? ?????????? ????????????. ?????????? ?????????? ???? ???????????? ?????????? ???????? ?????????? ?????????? ?????? ???? ??????????</p>
                <h3 >!????????????</h3>
                <button className="modalTestButton" onClick={() => this.next()}>???????? ????????</button>
            </div>

        }
        if (this.state.questionsCounter > 0 && this.state.questionsCounter < 11) {//changing questions

            modalContent = 
            <div className="modal">
                <p><b>{this.state.questionsCounter}</b> / 10 ????????</p>
                <p>{this.state.question.text}</p>
                <ul>
                    {
                        this.state.question.answers.map((answer) =>
                            <li> <label>{answer.text}</label><input type="radio" id={answer.id} name="radAnswer"  value={answer.correct} /></li>)
                    }
                </ul>
                <button className="modalTestButton" onClick={() => this.findAnyCheckedRadio()? this.next() : alert("?????? ?????? ??????????") }>????????</button>
            </div>

        }
        if (this.state.questionsCounter > 10) {//finish test
            modalContent = <div className="modal">
                <h2>?????????? ????????????</h2>
                <h3> {this.state.testRecord.score} :?????????? ??????????</h3>
                <button className="modalTestButton"  onClick={() => this.finishTest()}>???????? ?????? ????????????</button>
            </div>
        }


        return (
            <div className="TestsCaseBox">
                <div onClick={() => this.setmodalIsOpen(true)}>
                    <header className="caseTitle">
                        <h3>{this.props.title}</h3>
                    </header>
                    <img src={this.props.image} alt="TestImage" width="200" height="150" />
                </div>
                <Modal isOpen={this.state.modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={this.close.bind(this)}
                    style={
                        {
                            overlay: {
                            },
                            content: {
                                borderRadius: '60px',
                                width:'550px',
                                height:'400px',
                                margin:'auto'
                            }
                        }
                    }>
                    <h1 className="modal__title">???????? ??{this.props.title}</h1>
                    {modalContent}

                </Modal>
            </div>
        )
    }
}
export default withAuth0(TestBox)