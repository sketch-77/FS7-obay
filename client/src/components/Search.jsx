import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {useInput} from '../hooks/useInput';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { withRouter} from "react-router-dom";

function Search(props) {
    const [currentUser, setCurrentUser] = useState();
    const {value, bind, reset} = useInput('');
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("")


    const handleInputChange = event => {
        const {name, value} = event.target;
        setKeyword(value);
    };

    const setSearchURL = () => {
        props.history.push(`/products/search?q=${keyword}`);
    }

    return (
        <Form.Group controlId="formGroupSearch">
            <Form inline>
                <FormControl onChange={handleInputChange} width="80" type="text" placeholder="Search"
                             className="mr-sm-2"/>
                <Button onClick={setSearchURL} variant="outline-success">Search products</Button>
            </Form>
        </Form.Group>
    );
}

export default withRouter(Search);