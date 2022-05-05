import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="cardd">
                <h2>Contact Me</h2>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label>Surname</label>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text"/>
                        </div>
                    </div>

                    <div class="col">
                        <div class="form-group">
                            <label>Message</label>
                            <input type="text"/>
                        </div>
                    </div>

                    <div class="col">
                        <input type="submit" value="Submit"/>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Contact