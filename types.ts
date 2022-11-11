interface ApodDataType {
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
}
interface Props {
  data: null | ApodDataType;
  error: any;
  loading: boolean;
}

export type { ApodDataType, Props };
