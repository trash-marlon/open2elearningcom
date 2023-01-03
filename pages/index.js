import Head from 'next/head'
import Image from 'next/image'
import Maintenance from '../src/components/Maintenance'
import styles from '../styles/Home.module.css'
import BasicLayout from '../src/layouts/BasicLayout'

export default function Home() {
  return (
    <BasicLayout>
      <h1>Home</h1>
    </BasicLayout>
  )
}