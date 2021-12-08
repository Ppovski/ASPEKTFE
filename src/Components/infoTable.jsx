import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Header, Modal, Icon, Image, Segment, Table, Button, Form, Select, Grid } from 'semantic-ui-react'

import EditCountry from "./editCountry";
const InfoTable = (props) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedContact, setSelectedContact] = useState('');
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);


  const [openModal, setOpenModal] = useState(false)

  const [editCountry, setEditCountry] = useState("")
  const [editContact, setEditContact] = useState("")
  const [editCompany, setEditCompany] = useState("")
  const [editId, setEditId] = useState("")


  const getItemsList = () => localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];



  const hadleSubmit = (event) => {
    event.preventDefault();
    const data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
    data.push({
      id: uuidv4(),
      selectedCountry,
      selectedCompany,
      selectedContact,

    })
    localStorage.setItem("data", JSON.stringify(data));
    setData(data)
    setSelectedCountry("")
    setSelectedContact("")
    setSelectedCompany("")

  }




  const deleteContactFromTable = (id) => {
    const newData = getItemsList()
    const editData = newData.filter((it) => it.id !== id);
    localStorage.setItem("data", JSON.stringify(editData))
    setData(editData)
  }

  const editEventSaveClick = (id) => {
    const newData = getItemsList();
    const editData = newData.filter((it) => it.id !== editId)
    editData.push({
      id: editId,
      selectedCountry: editCountry,
      selectedContact: editContact,
      selectedCompany: editCompany
    })
    localStorage.setItem("data", JSON.stringify(editData));
    setOpenModal(false)
    setData(editData)
    setEditCountry("")
    setEditCompany("")
    setEditContact("")
  }


  const Country = [
    { key: 'Macedonia', value: 'Macedonia', text: 'Macedonia' },
    { key: 'Serbia', value: 'Serbia', text: 'Serbia' },
    { key: 'Germany ', value: 'Germany ', text: 'Germany ' },
    { key: 'Italy ', value: 'Italy ', text: 'Italy ' },
    { key: 'France ', value: 'France ', text: 'France ' },
    { key: 'England ', value: 'England ', text: 'England ' },
  ]
  const Contact = [
    { key: 'Pero Perovski', value: 'Pero Perovski', text: 'Pero Perovski' },
    { key: 'Pero Stojcevski', value: 'Pero Stojcevski', text: 'Pero Stojcevski' },
    { key: 'Pero Mircevski ', value: 'Pero Mircevski ', text: 'Pero Mircevski ' },
  ]
  const Company = [
    { key: 'Twitter', value: 'Twitter', text: 'Twitter' },
    { key: 'Google', value: 'Google', text: 'Google' },
    { key: 'Facebook ', value: 'Facebook ', text: 'Facebook ' },
    { key: 'Microsoft', value: 'Microsoft', text: 'Microsoft' },
    { key: 'Tesla', value: 'Tesla', text: 'Tesla' },
    { key: 'Instagram ', value: 'Instagram ', text: 'Instagram ' },
  ]
  const hendleDropdownContact = (event, data) => {
    if (data.value)
      setSelectedContact(data.value)
  }
  const hendleDropdownCompany = (event, data) => {
    if (data.value)

      setSelectedCompany(data.value)

  }
  const hendleDropdownCountry = (event, data) => {
    if (data.value)
      setSelectedCountry(data.value)

  }

  const closeModal = () => {
    setOpenModal(false)
  }

  return (


    <div style={{ margin: "10px 10px 10px 10px" }}>

      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            {/* insert contact start */}
            <Segment style={{ width: "100%", display: "flex", justifyContent: "left" }} >
              <Form onSubmit={hadleSubmit} style={{ width: "100%" }}>
                <h3> Insert New Contact</h3>
                <Form.Field>
                  <label>Contact </label>
                  <Select
                    placeholder='Contact'
                    options={Contact}
                    value={selectedContact}
                    onChange={hendleDropdownContact}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Company</label>
                  <Select
                    placeholder='Company'
                    options={Company}

                    value={selectedCompany}
                    onChange={hendleDropdownCompany}
                  />

                </Form.Field>
                <Form.Field>
                  <label>Country</label>
                  <Select
                    placeholder='Country'
                    options={Country}
                    style={{ display: "flex", width: "100% !important" }}
                    value={selectedCountry}
                    onChange={hendleDropdownCountry}
                  />
                </Form.Field>

                <Button type='submit' color="blue" >Add Contact</Button>
              </Form>
            </Segment>
            {/* insert contact end */}
          </Grid.Column>



          <Grid.Column width={8}>
            <Table celled collapsing style={{ width: "100%" }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Contact</Table.HeaderCell>
                  <Table.HeaderCell>Company</Table.HeaderCell>
                  <Table.HeaderCell>Country</Table.HeaderCell>
                  <Table.HeaderCell>Edit</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data ? data.map((items, key) => <Table.Row >
                  <Table.Cell key={key.id} >
                    <Header as='h4' image>
                      <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                      <Header.Content>
                        {items.selectedContact}
                        <Header.Subheader>Fabric Design</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{items.selectedCompany}</Table.Cell>
                  <Table.Cell>{items.selectedCountry}
                  </Table.Cell>
                  <Table.Cell>

                    <Button color="red" onClick={(id) => {
                      setOpenModal(true)
                      setEditId(items.id)
                      console.log(items.id, "button id")
                    }}>

                      Edit
                    </Button>

                    <Button color="red" onClick={(id) =>
                      deleteContactFromTable(items.id)

                    }>
                      <Icon name="delete" />
                      Delete
                    </Button>


                  </Table.Cell>
                </Table.Row>) :
                  <Table.Row>
                    <Table.Cell>
                      <Header as='h4' image>
                        <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                        <Header.Content>
                          Pero Stojcevski
                          <Header.Subheader>Entertainment</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell><a href="http://facebook.com" target="_blank" rel="noreferrer noopener"><Icon name="facebook" />Facebook</a></Table.Cell>
                    <Table.Cell>Germany</Table.Cell>
                  </Table.Row>}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <EditCountry
        openModal={openModal}
        setOpenModal={closeModal}
        editCountry={editCountry}
        setEditCountry={setEditCountry}
        editEventSaveClick={editEventSaveClick}
        editCompany={editCompany}
        setEditCompany={setEditCompany}
        editContact={editContact}
        setEditContact={setEditContact}
      />


    </div>
  );


}
export default InfoTable
