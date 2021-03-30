import React, { useCallback, useState } from 'react'
import { TabTitle, TabItem, TabContent } from './styles'

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)
  const onClickTab = useCallback((e, newActiveTab) => {
    e.preventDefault()
    setActiveTab(newActiveTab)
  }, [])

  return (
    <>
      <TabTitle>
        {children.map(tab => {
          const label = tab.props.label
          return (
            <TabItem
              key={label}
              onClick={e => onClickTab(e, label)}
              activeTab={label === activeTab ? 'active' : ''}
            >
              <p>{label}</p>
            </TabItem>
          )
        })}
      </TabTitle>
      {children.map(content => {
        if (content.props.label === activeTab)
          return (
            <TabContent key={content.props.label}>
              {content.props.children}
            </TabContent>
          )
      })}
    </>
  )
}

export default Tab
