import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
  children: any
}

export const ExampleComponent = ({ text, children }: Props) => {
  return <div className={styles.test}>Example Component: {text} {children}</div>
}
