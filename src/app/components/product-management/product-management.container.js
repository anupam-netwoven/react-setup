import React from 'react';
import { render } from 'react-dom';
import randomstring from 'randomstring';

export class ProductManagementContainer extends React.Component {

    add = () => {
        let raw = randomstring.generate({
            length: 20,
            charset: 'alphabetic'
        });
        let newProductName = raw.substring(0, 1).toUpperCase() + raw.substring(1, raw.length).toLocaleLowerCase();
        this.props.addProduct({ name: newProductName, price: 300000 });
    }

    render() {
        return (
            <div>
                <button onClick={this.add}>Add</button>
                <ul>
                    {
                        this.props.products.map((item, index) => {
                            return <li>{item.name}</li>
                        })
                    }
                </ul>
            </div>

        )
    }
}
