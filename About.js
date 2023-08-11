import React, {useState} from 'react'

export default function About() {

    //let myStyle={

      const [myStyle, setMyStyle] = useState( {
        color: 'black',
        backgroundColor: 'white'

    })

      const[BtnText, setBtnText] = useState("enable white mode")

      

     const toggleStyle= ()=>{
        if(myStyle.color == 'black') {
          setMyStyle({

            color: 'white',
            backgroundColor: 'black'

          })
          setBtnText("Enable light Mode")
        }
        else {
          setMyStyle({
           color: 'black',
           backgroundColor: 'white'

          })
        }

    
        }
    



  return (
    <>
    <div>
        <div className="container" style={myStyle}>
<h2>More to Know</h2>
      <div ClassName="accordion" id="accordionExample">
  <div ClassName="accordion-item">
    <h2 ClassName="accordion-header">
      <button  ClassName="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       What Is WordTally
      </button>
</h2>
<div id="collapseOne" ClassName="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div ClassName="accordion-body">
    <h6>Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above. The Auto-Save feature will make sure you won't lose any changes while editing, even if you leave the site and come back later. Tip: Bookmark this page now.</h6>
    </div>
</div>
</div>
  <div ClassName="accordion-item">
    <h2 ClassName="accordion-header">
      <button  ClassName="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Why It is Used
      </button>
    </h2>
    <div id="collapseTwo" ClassName="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div ClassName="accordion-body">
        <h6>Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.</h6>
      </div>
    </div>
  </div>
  <div ClassName="accordion-item">
    <h2 ClassName="accordion-header">
      <button ClassName="accordion-button collapsed" style={myStyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Additional Functions
      </button>
    </h2>
    <div id="collapseThree" ClassName="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div ClassName="accordion-body">
        <h6>In addition, WordCounter shows you the top 10 keywords and keyword density of the article you're writing. This allows you to know which keywords you use how often and at what percentages. This can prevent you from over-using certain words or word combinations and check for best distribution of keywords in your writing.</h6>
      </div>
    </div>
  </div>
</div>
<div ClassName="container">
<button onClick={toggleStyle} type="button" className="btn btn-primary">DARK MODE</button>
</div>
    </div>
    </div>
    </>
  )
}
