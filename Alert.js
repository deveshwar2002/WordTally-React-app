import React from 'react'

export default function Alert(props) {
  return (
    <div>
     <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}I MADE THIS WEBSITE ONLY FOR EDUCATIONAL PURPOSE SO THEIR MAY BE SOME ISSUES  </strong>:{props.alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}
