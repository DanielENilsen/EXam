import React from 'react';
import { BASE_URL, headers, DELETE } from "../apiBackend/ApiCall";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Button from "react-bootstrap/Button";



function DeleteMessage(props) { 

    const history = useHistory();

    function checkDelete() {
        confirmAlert({
            title: "Confirm deletion",
            buttons: [
                {
                    label: "yes",
                    onClick: () => deletemessage(),
                },
                {
                    label: "no",
                },
            ],
        });
    }

    var deletemessage =  async function () {
        const url = BASE_URL + "contacts/" + props.id;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        history.push("/admin/message");
    }

    return (
        <Button className = "edithForm__button" onClick={checkDelete}>
            Delete
        </Button>
    );
}

export default DeleteMessage;