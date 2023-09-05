import React, { useState } from "react";
import { Col, Form, Row, Button,Alert} from "react-bootstrap";

const TodoList = () => {
    const[title,setTitle] = useState('');
    const[desc,setDesc] = useState('');
    const [mainList,setMainList] =useState([])

    const onSubmit=(e)=>{
        e.preventDefault()
        setMainList([...mainList,{title,desc}]);
        setTitle("")
        setDesc("")
        // console.log(mainList)    
    }

    let deleteTask=(i)=>{
     let mainCopy=[...mainList];
     mainCopy.splice(i,1)
     setMainList(mainCopy)
    }

     let TodoList=<Alert variant="warning"><Alert.Heading>No Task Available</Alert.Heading></Alert>

    if(mainList.length>0){
        TodoList= mainList.map((t,i)=>{
            return <Alert key={i} variant="warning">
            <Alert.Heading>{t.title}</Alert.Heading>
            <p>
            {t.desc}
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button variant="outline-warning" type="submit" onClick={()=>{deleteTask(i)}}>
                Delete
              </Button>
            </div>
          </Alert>
        })
    }
   
   
       
    
  return (
    <>
      <Row className="bg-warning p-3 text-center font-weight-bold">
        <Col>
          <h1 style={{ fontSize: "60px" }}>Todo List</h1>
        </Col>
      </Row>
      <Row>
        <Form style={{ display: "flex" }}>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontSize: "20px",
                  marginTop: "20px",
                  fontWeight: "bolder",
                }}
              >
                Title
              </Form.Label>
              <Form.Control
                style={{
                  border: "3px solid black",
                  padding: "10px",
                  fontSize: "20px",
                }}
                value={title}

                onChange={(e)=>{
                    setTitle(e.target.value)
                }}

                type="text"
                placeholder="Enter title Here.."
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className="ms-3">
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontSize: "20px",
                  marginTop: "20px",
                  fontWeight: "bolder",
                }}
              >
                Description
              </Form.Label>
              <Form.Control
                style={{
                  border: "3px solid black",
                  padding: "10px",
                  fontSize: "20px",
                }}

                value={desc}
                
                onChange={(e)=>{
                    setDesc(e.target.value)
                }}
                type="text"
                placeholder="Enter Description Here.."
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col style={{ marginTop: "65px", marginLeft: "30px" }}>
            <Button variant="warning" type="submit" onClick={onSubmit}>Add Task</Button>
          </Col>
        </Form>
      </Row>
      <Row>
        <Col className="mt-5">
          {TodoList}
        </Col>
      </Row>
    </>
  );
};

export default TodoList;
