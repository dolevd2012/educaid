import Modal from 'react-modal'
import React, { Component } from 'react'
import CaseService from '../Services/CaseService'
import ReactPlayer from 'react-player'

Modal.setAppElement('#app')
class CaseBox extends Component{

  constructor(){
   
    super()
    this.state={
      modalIsOpen: false,
      medicalCase:{
        instructions:[]
      }
    }
  }
  setmodalIsOpen(param){
    this.setState({
      modalIsOpen: param
    })
    if(param){
      this.callCase()
    }
  }



  callCase(){
    CaseService.getSpecificCase(this.props.title).then((res)=>{
      this.setState({medicalCase: res.data})
   });
   
  }
  playAudio(audioNum){ 
   this.stopAnyCurrentlyPlayingAudio()
   let audioEl = document.getElementsByClassName(audioNum)[0]
   audioEl.play()
   
  }

stopAnyCurrentlyPlayingAudio() {
    for(const audio of document.querySelectorAll('audio')) {
        audio.pause()
        audio.currentTime = 0; 
    }
}

        render(){
         
          
          return(
          
          <div className = "CaseBox">  
            <div onClick={()=>this.setmodalIsOpen(true)}>
             <header className="caseTitle">
               <h3>{this.props.title}</h3> 
             </header>
             <img src={this.props.image} alt="CaseImage" width="200" height="150"/>
          </div>
            <Modal  isOpen={this.state.modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>this.setmodalIsOpen(false)}
            style={
              {
                overlay:{
                  backgroundColor:'transparent',  
                } ,
                content: {
                  borderRadius: '60px',
                  height:'650px',
                  margin:'auto'
                }       
              }
            }> 
             <ul>
              <img src = "/images/close.png" className= "modal__close" alt = "סגור" width="25px" height="25px" onClick={()=>this.setmodalIsOpen(false)}/>
              <h2 className="modal__title"> {this.state.medicalCase.caseName} </h2>
            </ul> 
              <p style={{direction:'rtl'}}>{this.state.medicalCase.description}</p>
              <ReactPlayer className="react-player" url={this.state.medicalCase.videoUrl} controls={true} width='640px' height='360px'/>
              <h4 style={{textAlign:'right'}}>:שלבים לביצוע</h4>
              <ol>
              {
              
              this.state.medicalCase.instructions.map(
              (item) =>
              <div key={item.id} className="medicalCasesInstructions" onClick={()=>this.playAudio(item.id)}>
               <li key={item.id} > {item.text}</li>
                  <audio className={item.id}>
                      <source src={'/audios/'+ item.voiceUrl}></source>
                  </audio>
   
               </div>)
              }  
             </ol>
              </Modal>
           </div>   
        );
    
     
} 
}

export default CaseBox
