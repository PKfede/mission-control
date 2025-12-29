export interface LaunchType {
  id:number;
  rocket: string;
  launchpad: string;
  date_utc: string
  success: boolean;
  details:string
  links:{
    patch: {
        small: string;
        large: string;
    }
    webcast: string
    youtube_id: string
  }
}

export interface ModalObject {
  modal: boolean
  onClose: () => void
  children: React.ReactNode
}
