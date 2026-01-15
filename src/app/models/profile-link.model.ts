
export type ProfileLinkType = 'linkedin' | 'github';

export class ProfileLink {
  type?: ProfileLinkType;
  url?: string;
  label?: string;
  icon?: string;
}
