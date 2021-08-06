import React, { Component } from 'react'
import RecordService from '../Services/RecordService'
import { withAuth0 } from '@auth0/auth0-react'
import Graph from './Graph'
class Statistics extends Component {
    constructor() {
        super()
        this.state = {
            category: "שקלול של כולן ביחד",
            numberOfTests: 0,
            average: 0,
            highestScore: 0,
            lowestScore: 0,
            error: false
        }
        this.handleChangeCategory = this.handleChangeCategory.bind(this);


    }

    componentDidMount() {
        const { user } = this.props.auth0;
        this.findLowestScore("all", user.email)
        this.findHighestScore("all", user.email)
        this.countTestRecords("all", user.email)
        this.findAverage("all", user.email)

    }
    handleChangeCategory(e) {
        let category = e.target.value;
        const { user } = this.props.auth0;
        if (category === "all")
            this.setState({ category: "שקלול של כולן ביחד" });
        else
            this.setState({ category: category });

        this.findLowestScore(category, user.email)
        this.findHighestScore(category, user.email)
        this.countTestRecords(category, user.email)
        this.findAverage(category, user.email)

    }
    findLowestScore(category, userEmail) {
        if (category === "all")
            RecordService.getStatisticsByUser("min", userEmail).then((res) => {
                this.setState({ lowestScore: res.data })
                this.setState({ error: false })
            }).catch((error) => {
                if (error.response) {
                    this.setState({ error: true })
                }
            });
        else
            RecordService.getStatisticsByCategoryAndUser("min", category, userEmail).then((res) => {
                this.setState({ lowestScore: res.data })
                this.setState({ error: false })
            }).catch((error) => {
                if (error.response) {
                    this.setState({ error: true })
                }
            });

    }
    findHighestScore(category, userEmail) {
        if (category === "all")
            RecordService.getStatisticsByUser("max", userEmail).then((res) => {
                this.setState({ highestScore: res.data })
                this.setState({ error: false })
            }).catch((error) => {
                if (error.response) {
                    this.setState({ error: true })
                }
            });
        else
            RecordService.getStatisticsByCategoryAndUser("max", category, userEmail).then((res) => {
                this.setState({ highestScore: res.data })
                this.setState({ error: false })
            }).catch((error) => {
                if (error.response) {
                    this.setState({ error: true })
                }
            });
    }
    countTestRecords(category, userEmail) {
        if (category === "all")
            RecordService.getStatisticsByUser("count", userEmail).then((res) => {
                this.setState({ numberOfTests: res.data })
                this.setState({ error: false })
            }).catch((error) => {
                if (error.response) {
                    this.setState({ error: true })
                }
            });
        else
            RecordService.getStatisticsByCategoryAndUser("count", category, userEmail).then((res) => {
                this.setState({ numberOfTests: res.data })
                this.setState({ error: false })
            }).catch((error) => {
                if (error.response) {
                    this.setState({ error: true })
                }
            });
    }
    findAverage(category, userEmail) {
        if (category === "all")
            RecordService.getStatisticsByUser("average", userEmail).then((res) => {
                this.setState({ average: res.data })
                this.setState({ error: false })
            }).catch((error) => {
                if (error.response) {
                    this.setState({ error: true })
                }
            });
        else
            RecordService.getStatisticsByCategoryAndUser("average", category, userEmail).then((res) => {
                this.setState({ average: res.data })
                this.setState({ error: false })
            }).catch((error) => {
                if (error.response) {
                    this.setState({ error: true })
                }
            });
    }


    render() {
        const { user } = this.props.auth0;
        let graphDiv;
        let statisticResults;
        if (this.state.error) {
            statisticResults = 
            <div>
                <p>לא קיימים נתונים סטטיסטיים עבור הקטגוריה הרצויה</p>
            </div>
            graphDiv = <Graph userEmail={user.email} category={this.state.category} />
        } else {
            statisticResults =
            <div className="statisticResults">
                <h2>{this.state.category}</h2>
                <h4><span>מספר המבחנים שנעשו</span>: {this.state.numberOfTests}</h4>
                <h4><span>ממוצע</span>: {this.state.average}</h4>
                <h4><span>הציון הגבוה ביותר</span>: {this.state.highestScore}</h4>
                <h4><span>הציון הנמוך ביותר</span>: {this.state.lowestScore}</h4>
            </div>
            graphDiv = <Graph userEmail={user.email} category={this.state.category} />
        }
        return (
            <div className="ContentBody2">
                <h1>סטטיסטיקה</h1>
                <p>כאן תוכל למצוא נתונים סטטיסטיים אודות המבחנים שלך בקטגוריות השונות</p>
                <select name="categoryList" onChange={this.handleChangeCategory}>
                    <option value="all" defaultValue>שקלול של כולן ביחד</option>
                    <option value="החייאות וחנק">החייאות וחנק</option>
                    <option value="עצירת דימומים וחבישות">עצירת דימומים וחבישות</option>
                    <option value="פגיעות בעלי חיים">פגיעות בעלי חיים</option>
                    <option value="פגיעות אקלים">פגיעות אקלים</option>
                </select>
                <label>&nbsp;:בחר קטגוריה בה תרצה לצפות</label>
                <hr/>
                {statisticResults}
                {graphDiv}
            </div>
        )
    }
}
export default withAuth0(Statistics)