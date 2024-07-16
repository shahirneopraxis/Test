import React from 'react';
import './size_table.css';

const SizeTable = () => {
    return (
        <div className="size-table-container">
            <table className="size-table">
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Small</td>
                        <td>$19.99</td>
                    </tr>
                    <tr>
                        <td>Medium</td>
                        <td>$24.99</td>
                    </tr>
                    <tr>
                        <td>Large</td>
                        <td>$29.99</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SizeTable;

