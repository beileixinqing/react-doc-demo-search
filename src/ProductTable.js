import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component{
   /* constructor(props){
        super(props);
    }*/
    render(){
        let filterText=this.props.filterText;
        let inStockOnly=this.props.inStockOnly;
        let curCategory="";
        return(
            <table>
                <thead>
                    <tr style={{fontWeight:'bold'}}>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                    {this.props.list.map((value,index) => {
                            let listItemShow;
                            if(value.name.toLowerCase().indexOf(filterText.toLowerCase())!==-1||filterText===''){
                                listItemShow=true;
                                if(inStockOnly===true&&value.stocked===true){
                                    listItemShow=true;
                                }else if(inStockOnly===true&&value.stocked===false){
                                    listItemShow=false;
                                }
                            }else{
                                listItemShow=false;
                            }
                            let categoryStatus=false;
                            if(value.category===curCategory){
                                categoryStatus=false;
                            }else{
                                categoryStatus=true;
                            }
                            curCategory=value.category;
                            return (
                                <tbody key={index}>
                                    <ProductCategoryRow category={value.category} categoryStatus={categoryStatus}/>
                                    <ProductRow
                                        stocked={value.stocked}
                                        name={value.name}
                                        price={value.price}
                                        show={listItemShow}/>
                                </tbody>
                            )
                        })
                    }
            </table>
        )
    }
}
export default ProductTable