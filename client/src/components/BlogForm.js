import React from 'react'

export default class BlogForm extends React.Component{
    state = {
        title: '',
        content: '',
        img: null,
        imgDesc: ''
    }

    onChangeHandler = (event) => {
        const val = event.target.value
        this.setState({[event.target.name]: val})
    }
    onFileChange = (image) => {
        //console.log(image.target.files[0])
        //console.log(image.target.files[0].name)
        this.setState({ 
            img: image.target.files[0],
            loaded: 0,
        })
        //this.setState({ imgValue: image.target.files[0] })
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        //console.log(this.state)
        this.props.onFormSubmit(this.state)
    }

    render(){
        return(
            <div>
                <h1>To Upload Image on mongoDB</h1> 
	            <div> 
                     <form action="/" onSubmit={this.onFormSubmit}> 
                        <div> 
				            <label>Blog Title</label> 
				            <input type="text" placeholder="Blog Title"
	                            value={this.state.title} name="title" onChange={this.onChangeHandler} required /> 
                        </div> 
                        <div> 
				            <label>Blog Content</label> 
				            <input type="text" placeholder="Blog Content"
					            value={this.state.content} name="content" onChange={this.onChangeHandler} required /> 
			            </div> 
			            <div> 
				            <label>Image Description</label> 
				            <textarea id="imgDesc" name="imgDesc" value={this.state.imgDesc} rows="2"
						        placeholder="Image Description" onChange={this.onChangeHandler} required> 
				            </textarea> 
			            </div> 
			            <div> 
				            <label>Upload Image</label> 
				            <input type="file"
					            name="image" onChange={this.onFileChange} required /> 
			            </div> 
			            <div> 
				            <button type="submit">Submit</button> 
			            </div> 
		            </form> 
	            </div> 

	
            </div>
        )
    }
}