import React from 'react'

export class SubFolders extends React.Component{
	handleClickForTop() {
      this.props.onClickOnSubfolder(this.props);
  }
	render(){
		return(
				<div className="col-5" style={{ marginLeft: 20 , marginTop: 10}}>
				<div> <button onClick={this.handleClickForTop.bind(this)} style={{ color: 'red'}}><i className="fa fa-plus"></i> Add New**</button> </div>
					<div>
			        { this.props.subfoldersData.map(id => {
										return <div key={id.name}> <i className="fa fa-folder">{id.name} <SubFolder subfolderData={id.subFolder} />
										</i> </div>
			            })
			        }
					</div>
				</div>
			)
	}
}

export class SubFolder extends React.Component{

	handleClickForSubFolders(value){
		this.props.onClickEvent(value);
	}
	handleClick() {
      this.props.onClickEvent(this.props);
  }
	render(){
		return(
				<div className="col-5" style={{ marginLeft: 20, marginTop: 10 }}>
					<div> <button style={{ color: 'red'}} onClick={this.handleClick.bind(this)} ><i className="fa fa-plus"></i> Add New*</button> </div>
					<div>
			        { this.props.subfolderData.map(id => {
										return <div key={id.name}> <i className="fa fa-folder">{id.name} 
											<SubFolders onClickOnSubfolder={this.handleClickForSubFolders.bind(this)} subfoldersData={id.subFolder} />
										</i> </div>
			            })
			        }
					</div>
				</div>
			)
	}
}

export class Dictionary extends React.Component{
	constructor() {
    super();
    this.state = {
      data :  [{
      	refID: 0,
      	_id: 1,
				name: 'New Folder 1',
				subFolder: [{
					_id: 11,
				  name: 'New Folder 1.1',
				  subFolder: [{
				  					refID: 111,
								  	_id: 111,
								    name: 'New Folder 1.1.1',
								    subFolder: [{
									    _id: 1,
									    name: 'New Folder 1.1.1.1',
									    subFolder: [],
									    isOpen: false
								    },
								    {
								    	refID: 112,
									    _id: 2,
									    name: 'New Folder 1.1.1.2',
									    subFolder: [],
									    isOpen: false
								    }],
								    isOpen: false
				  },
				  {
				  refID: 12,
	      	_id: 2,
					name: 'New Folder 2.2',
					subFolder: [],
					isOpen: false
				}],
				  isOpen: false
				}],
				isOpen: false
			},
			{
				refID: 0,
      	_id: 1,
				name: 'New Folder 2',
				subFolder: [],
				isOpen: false
			},
			{
				refID: 0,
      	_id: 1,
				name: 'New Folder 3',
				subFolder: [],
				isOpen: false
			}]
    }
  }

  addNewFolder(value, data){
  	var person = prompt("Please enter your folder name", "Harry Potter");

		if (person != null) {
		   
		    var folderName = {
		    	refID: 0,
      		_id: 1,
					name: person,
					subFolder: [],
					isOpen: false
		    }
		}else{
				var folderName = {
		    	refID: 0,
      		_id: 1,
					name: person,
					subFolder: [],
					isOpen: false
		    }
		}

     folderName =this.state.data.push(folderName)
     this.setState(function(prevState){
        return{
          data: this.state.data
        }
     })
  }
  addFolder(){
  	var person = prompt("Please enter your folder name", "Harry Potter");

		if (person != null) {
		   
		    var folderName = {
		    	refID: 0,
      		_id: 1,
					name: person,
					subFolder: [],
					isOpen: false
		    }
		}else{
				var folderName = {
		    	refID: 0,
      		_id: 1,
					name: person,
					subFolder: [],
					isOpen: false
		    }
		}

     folderName =this.state.data.push(folderName)
     this.setState(function(prevState){
        return{
          data: this.state.data
        }
      })
  }

	render(){
			return(
			  <div>
			  	<button style={{ color: 'blue'}} onClick={this.addFolder.bind(this)}><i className="fa fa-plus"></i> Add New</button>
	        { this.state.data.map(id => {
								return <div key={id.name}> <i className="fa fa-folder">{id.name} <SubFolder  onClickEvent={this.addNewFolder.bind(this, this.props)} subfolderData={id.subFolder} />
								</i> </div>
	            })
	        }
        </div>
			)
	}
}

export default class App extends React.Component{
	render(){
		return(
				<div>
						<Dictionary />	
				</div>
				
			)
	}
}
