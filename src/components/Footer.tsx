import Link from "next/link"
import React from "react"

const FOOTER_MENU = [{
  title: 'Resource',
  sub_menu: [{
    title: 'Ant Design',
    url: 'https://ant.design',
  }, {
    title: 'Ant Design Charts',
    url: 'https://charts.ant.design',
  },{
    title: 'Pro Components',
    desc: '模板组件',
    url: 'https://procomponents.ant.design',
  },{
    title: 'Ant Design Mobile',
    url: 'https://mobile.ant.design',
  },{
    title: 'Ant Design Landing',
    desc: 'Landing Templates',
    url: 'https://landing.ant.design',
  },{
    title: 'Scaffolds',
    desc: 'Scaffold Market',
    url: 'https://scaffold.ant.design',
  },{
    title: 'Umi',
    desc: 'React Application Framework',
    url: 'https://umijs.org',
  },{
    title: 'Dumi',
    desc: 'Component doc generator',
    url: 'https://d.umijs.org',
  },{
    title: 'qiankun',
    desc: 'Micro-Frontends Framework',
    url: 'https://qiankun.umijs.org',
  },{
    title: 'ahooks',
    desc: 'React Hooks Library',
    url: 'https://github.com/alibaba/hooks',
  },{
    title: 'Ant Motion',
    desc: 'Motion Solution',
    url: 'https://motion.ant.design',
  },{
    title: 'China Mirror 🇨🇳',
    url: 'https://ant-design.gitee.io/',
  }]
}, {
  title: 'Community',
  sub_menu: [{
    title: 'Awesome Ant Design',
    url: 'https://github.com/websemantics/awesome-ant-design',
  }, {
    title: 'Medium',
    url: 'https://medium.com/ant-design/',
  },{
    title: 'Twitter',
    url: 'https://twitter.com/antdesignui',
  },{
    title: 'Ant Design Blog',
    url: 'http://zhuanlan.zhihu.com/antdesign',
  },{
    title: 'Experience Cloud Blog',
    url: 'http://zhuanlan.zhihu.com/xtech',
  },{
    title: 'SEE Conf',
    desc: 'Experience Tech Conference',
    url: 'https://seeconf.antfin.com/',
  }]
}, {
  title: 'Help',
  sub_menu: [{
    title: 'GitHub',
    url: 'https://github.com/ant-design/ant-design',
  }, {
    title: 'Bug Report',
    url: 'https://new-issue.ant.design/',
  },{
    title: 'Issues',
    url: 'https://github.com/ant-design/ant-design/issues',
  },{
    title: 'Ant Design Practical Tutorial',
    url: 'https://www.yuque.com/ant-design/course',
  },{
    title: 'Discussions',
    url: 'https://github.com/ant-design/ant-design/discussions',
  },{
    title: 'StackOverflow',
    url: 'http://stackoverflow.com/questions/tagged/antd',
  },{
    title: 'SegmentFault',
    url: 'https://segmentfault.com/t/antd',
  }]
}, {
  title: 'More Products',
  sub_menu: [{
    title: 'YuQue',
    desc: 'Write your document as a team',
    url: 'https://yuque.com',
  }, {
    title: 'AntV',
    desc: 'Data Visualization',
    url: 'https://antv.vision',
  },{
    title: 'Egg',
    desc: 'Enterprise Node.js Framework',
    url: '',
  },{
    title: 'Kitchen',
    desc: 'Sketch Toolkit',
    url: 'https://kitchen.alipay.com',
  },{
    title: 'Ant Financial Experience Tech',
    url: 'https://xtech.antfin.com/',
  }]
}, ]

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-1400 mx-auto">
        <div className="md:flex justify-around py-10 md:py-20">
          {FOOTER_MENU.map(({title, sub_menu}) => (
            <div key={title}>
              <h3>
                {title}
              </h3>
              <ul className="space-y-3">
                {sub_menu.map(({title, desc, url}) => (
                  <li key={title}>
                    <Link href={url}>
                      {title}
                    </Link>
                    {desc && <p className="text-secondary inline text-gray-600">{` - ${desc}`}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="text-secondary" />
        <p className="text-secondary text-base text-center py-4 space-x-2">
          <span>
            Made with
          </span>
          <span>
            ❤
          </span>
          <span>
            by
          </span>
          <Link href="https://xtech.antfin.com">
            XTech
          </Link>
        </p>
      </div>
    </div>
  )
}