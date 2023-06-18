import React from "react"
import Button from "./Button"

const MESSAGE = [
  '$ npm i @ant-design/pro-cli -g',
  '$ pro create my-app',
  '',
  '',
  '$ cd my-app',
  '$ yarn',
  '$ yarn start # open browser and visit http://localhost:8000',
]

export default function LetsProSession() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center">Let’s Pro</h2>
      <p className="text-center">Run commands below, explore it!</p>
      <div className="bg-gray-100 py-5 px-12">
          $ npm i @ant-design/pro-cli -g<br />
          $ pro create my-app<br />
          <br />
          $ cd my-app<br />
          $ yarn<br />
          $ yarn start 
          <span className="text-red-500 ml-2">
            # open browser and visit http://localhost:8000
          </span>
      </div>
      <p>
        <span>Need help? You can see </span>
        <a>documentation</a>
        <span>and</span>
        <a>faq</a>
        <span>first, and</span>  
        <a>ask questions</a> 
        <span>in GitHub if they don't help.</span>
      </p>
      <Button />
    </div>
  )
}