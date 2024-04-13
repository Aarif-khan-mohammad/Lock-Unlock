import React from 'react'
import { useState } from 'react'
import { MainContainer , CustomButton ,UnlockText ,ImageOne} from './styledComponents'

const Unlock = () => {
    const [isLocked , setIsLocked] = useState(true)

    const onChangeLock = () => {
        setIsLocked(prevState => !prevState)
    }

  return (
    <MainContainer>
        {isLocked ? <ImageOne src='https://assets.ccbp.in/frontend/hooks/lock-img.png ' alt='lock'/> : 
        <ImageOne src='https://assets.ccbp.in/frontend/hooks/unlock-img.png' alt='unlock'/>}
        { isLocked ?<UnlockText> Your Device Is Locked </UnlockText>:<UnlockText>Your Device is Unlocked</UnlockText> }
        <CustomButton onClick={onChangeLock}> {isLocked ? "UnLocked" : "Locked"}</CustomButton>
    </MainContainer>
  )
}

export default Unlock
