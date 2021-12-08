import React from 'react'
import { Input, Button, TextArea, Modal } from 'semantic-ui-react'
import { Grid, Segment, Icon, } from 'semantic-ui-react'






const EditCountry = (props) => {

    return (
        <div>

            <Modal
                dimmer
                open={!!props.openModal}
                onClose={props.closeModal}
            >
                <Modal.Header>Edit Table Data</Modal.Header>
                <Modal.Content>


                    <Segment >
                        <label>Edit Contact</label>
                        <Input
                            name="contact"
                            style={{ width: "100%" }}
                            placeholder={props.selectedContact}
                            type="text"
                            value={props.editContact}
                            onChange={(e) => props.setEditContact(e.target.value)}
                        />
                        <label>Edit Country</label>
                        <Input
                            name="country"
                            style={{ width: "100%" }}
                            type="text"
                            value={props.editCountry}
                            onChange={(e) => props.setEditCountry(e.target.value)}
                        />
                        <label>Edit Company</label>
                        <Input
                            name="company"
                            style={{ width: "100%" }}
                            type="text"
                            value={props.editCompany}
                            onChange={(e) => props.setEditCompany(e.target.value)}
                        />

                    </Segment>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='blue' onClick={props.editEventSaveClick} >Save</Button>
                    <Button color='red' onClick={props.setOpenModal}>Close</Button>
                </Modal.Actions>
            </Modal>


        </div>
    )
}
export default EditCountry