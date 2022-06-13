import './styles.sass'

const IndexPage = ({rotate = 'right', children}) => {
  const triggerLooping = (e) => {
    e.target.classList.add('looping')
  }
  const stopLooping = (e) => {
    e.target.classList.remove('looping')
  }


  return (
    <div className="looping-box-ratio">
      <div className="animated-div" onMouseEnter={triggerLooping} onAnimationEnd={stopLooping}>
        {children}
      </div>
    </div>
  )
}

export default IndexPage;
