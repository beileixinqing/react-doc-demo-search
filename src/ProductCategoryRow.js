import React from 'react'

class ProductCategoryRow extends React.Component{
    /*constructor(props){
        super(props);
    }*/
    render(){
        let styleObj = {
            display : this.props.categoryStatus ? 'block':'none',
            fontWeight:"bold"
        };
        return(
            <tr style={styleObj}>
                <td>
                    {this.props.category}
                </td>
            </tr>
        )
    }
}

export default ProductCategoryRow