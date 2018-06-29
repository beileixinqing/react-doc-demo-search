import React from 'react'

class ProductRow extends React.Component{
    /*constructor(props){
        super(props);
    }*/
    render(){
        let styleObj = {
            display : this.props.show ? 'block':'none',
        };
        return (
            <tr style={styleObj}>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.price}
                </td>
            </tr>
        )
    }
}

export default ProductRow