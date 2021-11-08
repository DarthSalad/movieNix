import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import React, { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../../firebase"
// import { Redirect } from 'react-router'
import Home from "../Home/Home"
import axios, { Axios } from "axios"

export default function Profile() {
  const [user] = useAuthState(auth)
  const [accid, setAccid] = useState("")
  const [accbal, setAccbal] = useState("")
  const [privatekey, setPrivatekey] = useState("")

  useEffect(async () => {
    db.collection("accounts")
      .where("email", "==", user.email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setAccid(doc.data().accid)
          setPrivatekey(doc.data().privatekey)
        })
      })
      .catch((error) => {
        console.log("Error getting documents: ", error)
      })
       
      axios.get(`http://localhost:8000/profile/${accid}/${privatekey}`)
          .then((res) => {
          setAccbal(res.data.accbal)
      })
      
    // Axios({
    //     method: "POST",
    //     withCredentials: true,
    //     url: `http://localhost:8000/profile/${accid}/${privatekey}`
    // }).then(res => console.log(res.data))
      
  }, [user])

  function loadProfile() {
    const logout = () => {
      auth.signOut()
      window.location = "/"
    }

    return (
      <div
        className="profile-card"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <Card style={{ maxWidth: "300px" }}>
          <Card.Img variant="top" src={auth.currentUser.photoURL} />
          <Card.Body>
            <Card.Title>{auth.currentUser.displayName}</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              dolor aperiam ullam fuga, natus quis iusto architecto a itaque
              facere.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{user.email}</ListGroupItem>
            <ListGroupItem>some information</ListGroupItem>
                    <ListGroupItem>Account Id : {accid}</ListGroupItem>
                    <ListGroupItem>Account Balance : {accbal}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="/">Home</Card.Link>
            <Card.Link href="/" onClick={logout}>
              Logout
            </Card.Link>
            {/* <Button onClick={logout}>Logout</Button> */}
          </Card.Body>
        </Card>
      </div>
    )
  }

  return user ? loadProfile() : <Home />
}
