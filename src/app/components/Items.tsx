"use client"

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  test: any;
}

export const Items = ({ test }: Props) => {
  console.log({ test })

  return (
    <p>Items</p>
  )
};