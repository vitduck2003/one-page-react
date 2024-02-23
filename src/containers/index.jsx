import React from 'react'
import Discover from './Discover/index'
import Banner from './Banner/index'
import Membership from './Membership'
import Form from './Form'
export default function Main() {
  return (
    <article className="mb-[64px] mx-auto ">
      <Banner />
      <Discover />
      <Membership />
      <Form />
      </article>
  )
}
