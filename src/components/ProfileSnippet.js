import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import { FaGithub, FaTelegramPlane, FaSkype, FaCode } from "react-icons/fa";
import { colorPrimary, colorAccent } from "../constants/app_colors";
import { Link } from "react-router-dom";
import PrimaryActionButton from "../components/buttons/PrimaryActionButton";
import IconButton from "@material-ui/core/IconButton";
import {
  githubUrl,
  telegramUrl,
  skypeUrl,
  sourceCodeUrl
} from "../constants/app_data";
import Collapse from "@material-ui/core/Collapse";
import { profileSnippetAnimDuration } from "../constants/shared_variables";
import { description } from "../constants/app_data";
import { Typography, Tooltip } from "@material-ui/core";

const rootStyle = {
  borderRadius: "117px 0px 0px 117px",
  background: colorPrimary,
  boxShadow: "0px 0px 74px rgba(0, 0, 0, 0.16)",
  textAlign: "left",
  paddingLeft: 60,
  paddingBottom: 40,
  paddingTop: 40,
  minHeight: "65vh"
};

const borderStyle = {
  width: 200,
  height: "13px",
  background: colorAccent
};

const socialBtnStyle = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
  marginBottom: 20
};

export default class ProfileSnippet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snippetEnterAnimFinished: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        snippetEnterAnimFinished: true
      });
    }, profileSnippetAnimDuration);
  }

  render() {
    const { snippetEnterAnimFinished } = this.state;

    return (
      <Column flexGrow={1} style={rootStyle} justifyContent="center">
        <Typography
          variant="h2"
          style={{
            fontSize: "2.5em",
            fontWeight: 600,
            marginBottom: 15,
            marginTop: 0
          }}
        >
          SUPER BOY
        </Typography>
        <div style={borderStyle} />
        <Typography
          variant="h6"
          style={{
            fontWeight: 300,
            marginRight: 100,
            marginBottom: 10,
            marginTop: 15
          }}
        >
          {description}
        </Typography>
        <Row>
          <IconButton
            aria-label="GitHub Profile link"
            style={socialBtnStyle}
            onClick={() => {
              window.open(githubUrl, "_blank");
            }}
          >
            <FaGithub style={{ height: 40, width: 40, color: 'white' }} />
          </IconButton>
          <IconButton
            aria-label="Telegram Profile link"
            style={{ ...socialBtnStyle, marginLeft: 20 }}
            onClick={() => {
              window.open(telegramUrl, "_blank");
            }}
          >
            <FaTelegramPlane style={{ height: 40, width: 40, color: 'white' }} />
          </IconButton>
          <IconButton
            aria-label="Skype Profile link"
            style={{ ...socialBtnStyle, marginLeft: 20 }}
            onClick={() => {
              window.open(skypeUrl, "_blank");
            }}
          >
            <FaSkype style={{ height: 40, width: 40, color: 'white' }} />
          </IconButton>
          <IconButton
            aria-label="View source code link"
            style={{ ...socialBtnStyle, marginLeft: 20 }}
            onClick={() => {
              window.open(sourceCodeUrl, "_blank");
            }}
          >
            <FaCode style={{ height: 40, width: 40, color: 'white' }} />
          </IconButton>
        </Row>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <PrimaryActionButton variant="contained" borderRadius={10}>
            See Portfolio
          </PrimaryActionButton>
        </Link>
      </Column>
    );
  }
}
