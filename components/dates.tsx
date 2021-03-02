import { format, parseISO } from 'date-fns'
import React, { FunctionComponent } from 'react'

type Props = {
  className?: string
  from: string | null
  to: string | null
  type: 'education' | 'experience'
}

export const Dates: FunctionComponent<Props> = ({
  className,
  from,
  to,
  type
}) => (
  <div className={className}>
    {[from, to ?? (type === 'experience' ? 'Present' : null)]
      .filter(Boolean)
      .map((date) =>
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        date === 'Present' ? date : format(parseISO(date!), 'MMM y')
      )
      .join(' → ')}
  </div>
)
