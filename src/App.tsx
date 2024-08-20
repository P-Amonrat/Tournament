import React, { ChangeEvent, useState } from "react";
import { DoubleElimination } from "./components/DoubleElimination";
import { SingleElimination } from "./components/SingleElimination";
import "./index";
import SingleEliminationCustom from "./components/viewTournament/SingleEliminationCustom";
import DoubleEliminationCustom from "./components/viewTournament/DoubleEliminationCustom";
import CreateCard from "./components/createTournament/CreateCard";
import { Card, Col, Input, Row, Select, Typography } from "antd";
import RoundRobinEliminationCustom from "./components/viewTournament/RoundRobinEliminationCustom";

export default function App() {
  const [typeSelected, setTypeSelected] = React.useState<string>("single")
  const [positionSelected, setPositionSelected] = React.useState<string>("admin")

  const positionIsSelectedHandler = (value: string) => {
    setPositionSelected(value)
  }

  const typeIsSelectedHandler = (value: string) => {
    setTypeSelected(value)
  }


  return (
    <div style={{padding: "20px"}}>
      <Row gutter={[16, 16]}>
        <Col md={6} xs={12}>
          <Typography.Title level={5} style={{color: "#fff"}}>Position</Typography.Title>
          <Select
            style={{ width: "100%" }}
            showSearch
            placeholder="Select a position"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: 'admin', label: 'Admin' },
              { value: 'user', label: 'User' }
            ]}
            onChange={(value) => positionIsSelectedHandler(value)}
            value={positionSelected}
          />
        </Col>
        <Col md={6} xs={12}>
          <Typography.Title level={5} style={{color: "#fff"}}>Elimination Type</Typography.Title>
          <Select
            style={{ width: "100%" }}
            showSearch
            placeholder="Select a type"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: 'single', label: 'Single Elimination' },
              { value: 'double', label: 'Double Elimination' },
              { value: 'roundRobin', label: 'Round Robin Elimination' }
            ]}
            onChange={(value) => typeIsSelectedHandler(value)}
            value={typeSelected}
          />
        </Col>
      </Row>
      <div>
        {positionSelected === "admin" ? (
          <CreateCard type={typeSelected} />
        ) : positionSelected === "user" && typeSelected === "single" ? (
          <SingleEliminationCustom />) : positionSelected === "user" && typeSelected === "double" ? (
            <DoubleEliminationCustom />) : positionSelected === "user" && typeSelected === "roundRobin" ? (
              <RoundRobinEliminationCustom />
            ) : null
        }
      </div>
    </div>
  );
}
