import React, { useEffect, useState } from "react";
import SimpleContainer from "../../Container";
import BasicButtons from "../../Button";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import "../../../index.css"; // Ensure this is imported to apply styles

function Main() {
  const [loading, setloading] = useState(false);
  const [code, setcode] = useState(` function sum(a, b) {
    return a + b;}
  `);
  const [review, setreview] = useState("");
  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function getreview() {
    setloading(true);
    const response = await axios.post("http://localhost:5000/ai/get-response", {
      code,
    });
    setreview(response.data);

    setloading(false);
  }

  return (
    <div>
      <div className=" w-full min-h-screen flex flex-row items-center bg-[#2D2D2D]  justify-center">
        <SimpleContainer disableGutters={true} bgcolor={" #2D2D2D"}>
          <div className=" h-auto flex flex-col items-center  justify-center">
            <div className="code h-[450px] mt-10 overflow-y-auto   ">
              <Editor
                value={code}
                placeholder="Write some code..."
                onValueChange={(code) => setcode(code)}
                highlight={(code) =>
                  prism.highlight(
                    code,
                    prism.languages.javascript,
                    "javascript"
                  )
                }
                padding={10}
                className="custom-editor"
                style={{
                  fontSize: 16,
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  color: "#C594C6",
                  borderRadius: "10px",
                  width: "500px",
                  maxWidth: "500px",
                  // height:"100%",
                  // maxHeight:"100%",
                  overflowY: "auto",
                }}
              />
            </div>

            <div className="button w-full h-[10%]">
              <BasicButtons onclick={getreview} />
            </div>
          </div>
        </SimpleContainer>

        <SimpleContainer
          disableGutters={true}
          width={"700px"}
          bgcolor={""}
          loader={loading}
        >
          <Markdown>{review}</Markdown>
        </SimpleContainer>
      </div>
    </div>
  );
}

export default Main;
