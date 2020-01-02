import React, { Component } from 'react'

class Quote extends React.Component{
    constructor()
    {
        super()
        this.state={
            textQuote:"Tragedy is a tool for the living to gain wisdom, not a guide by which to live.",
            textAuthor:"Robert F. Kennedy",
            allQuotes:[]
        }
        this.handleClick=this.handleClick.bind(this)
    }

    

    handleClick(event){
        event.preventDefault()
        const random=Math.floor(Math.random()*this.state.allQuotes.length)
        this.setState({textQuote:this.state.allQuotes[random].quote})
        this.setState({textAuthor:this.state.allQuotes[random].author})
    }

    componentDidMount(){
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(response=>response.json()).then(response=>{
            
           const quot=response.quotes
           this.setState({allQuotes:quot})
           
            

        })
    }
    render(){
        const url="https://twitter.com/intent/tweet?text="+this.state.textQuote+"-"+this.state.textAuthor
        return(
            <div id="quote-box">
                <div id="text"><p>{this.state.textQuote}</p></div>
                <div id="author"><p>{this.state.textAuthor}</p></div>
                
                <p className="ins"><p className="icon"><a className="tweet twitter-share-button" id="tweet-quote" href={url} target="_blank" data-size="large"><span className="fa fa-twitter"></span></a>
                </p><button className="btn btn-primary btn-lg active" onClick={this.handleClick} id="new-quote">New Quote</button>
                </p>
            </div>


        )
    }
}
export default Quote
