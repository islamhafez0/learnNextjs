import React from 'react'

const SinglePageId = (props) => {
    console.log(props)
  return (
    <section>
        <h1>
            {props.params.id}
        </h1>
    </section>
  )
}

export default SinglePageId