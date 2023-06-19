import React from "react"

import Link from "next/link"

export default function LetsProSession() {
  return (
    <div className="text-center my-12">
      <h2 className="space-x-2">
        <span className="font-normal">
          Let&#39;s
        </span>
        <span>
          Pro
        </span>
      </h2>
      <p className="mt-6 mb-8">Run commands below, explore it!</p>
      <div className="flex justify-center">
        <div className="text-start font-base py-5 px-12 w-4/5 max-w-3xl" style={{backgroundColor: '#f2f4f5', fontSize: 16}}>
          <span>
            $ npm i @ant-design/pro-cli -g
          </span>
          <br />
          <span>
            $ pro create my-app
          </span>
          <br />
          <br />
          <span>
            $ cd my-app
          </span>
          <br />
          <span>
            $ yarn
          </span>
          <br />
          <span>
            $ yarn start 
          </span>
          <span className="text-danger ml-2">
            # open browser and visit http://localhost:8000
          </span>
        </div>
      </div>
      <p className="mt-6 mb-8">
        <span>Need help? You can see </span>
        <Link className="text-primary" href="https://pro.ant.design/docs/getting-started/">documentation </Link>
        <span>and </span>
        <Link className="text-primary" href="https://pro.ant.design/docs/faq/">faq </Link>
        <span>first, and </span>  
        <Link className="text-primary" href="https://github.com/ant-design/ant-design-pro/issues">ask questions </Link> 
        <span>in GitHub if they don&#39;t help.</span>
      </p>
      <div className="mt-20">
        <Link href="https://github.com/ant-design/ant-design-pro" >
          <button className="btn-primary rounded-sm">
            Download Pro
          </button>
        </Link>
      </div>
    </div>
  )
}