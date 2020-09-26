import { atom, useRecoilState } from 'recoil'

const navState = atom({
  key: 'navState',
  default: '/'
})

export const useNavState = ()=> useRecoilState(navState) 
