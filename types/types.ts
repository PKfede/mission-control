export interface LaunchType {
  id:string;
  rocket: string;
  name: string;
  flight_number: number;
  launchpad: string;
  date_utc: string
  success: boolean | null;
  details:string;
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
