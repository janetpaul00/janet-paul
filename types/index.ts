export type MetaType = {
  name: string
  subtitle: string
  bio: string
  email: string
  linkedin: string
  phone: string
  photo: {
    height: number
    width: number
    url: string
  }
}

export type EducationType = {
  id: string
  degree: string
  school: string
  from: string
  to: string
}

export type ExperienceType = {
  id: string
  position: string
  company: string
  from: string
  to: string
  content: string
}

export type SkillType = {
  id: string
  title: string
  description: string
}

export type ResumeType = {
  educations: EducationType[]
  experiences: ExperienceType[]
  skills: SkillType[]
  meta: MetaType
}
