import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.checkboxChange=this.checkboxChange.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        let inputText=this.refs.inputText.value;
        this.props.onSearch(inputText);
    }
    checkboxChange(e){
        // let checkboxStatus=this.refs.checkbox.checked;  通过ref获取
        let checkboxStatus=e.target.checked; //通过event.target事件获取
        this.props.onCheckBox(checkboxStatus);
    }
    render(){
        return(
            <div>
                <input type="text" ref='inputText' value={this.props.filterText} onChange={this.handleChange} placeholder="输入产品名称"/>
                <div>
                    <input type="checkbox" ref="checkbox" checked={this.props.inStockOnly} onChange={this.checkboxChange}/>
                    仅仅展示有库存的商品
                </div>
            </div>
        )
    }
}

export default SearchBar