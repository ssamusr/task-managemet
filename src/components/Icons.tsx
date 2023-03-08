interface IconsProps {
  className?: string
}

export const Logo = ({ className }: IconsProps): JSX.Element => {
  return (
    <svg
      width={54}
      height={54}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#a)">
        <rect width={54} height={54} rx={12} fill="#29A19C" />
        <g clipPath="url(#b)">
          <path
            d="M39.25 11.25h-7.315c-.735-2.03-2.66-3.5-4.935-3.5-2.275 0-4.2 1.47-4.935 3.5H14.75a3.51 3.51 0 0 0-3.5 3.5v24.5a3.51 3.51 0 0 0 3.5 3.5h24.5a3.51 3.51 0 0 0 3.5-3.5v-24.5a3.51 3.51 0 0 0-3.5-3.5Zm-12.25 0c.962 0 1.75.787 1.75 1.75s-.788 1.75-1.75 1.75-1.75-.787-1.75-1.75.788-1.75 1.75-1.75Zm3.5 24.5H18.25v-3.5H30.5v3.5Zm5.25-7h-17.5v-3.5h17.5v3.5Zm0-7h-17.5v-3.5h17.5v3.5Z"
            fill="#F9F9F9"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h54v54H0z" />
        </clipPath>
        <clipPath id="b">
          <path fill="#fff" transform="translate(6 6)" d="M0 0h42v42H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const IconHome = ({ className }: IconsProps): JSX.Element => (
    <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={ className }
    >
      <title>{'Home'}</title>
      <path
        d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <path
        d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
)

export const IconTimeline = ({ className }: IconsProps): JSX.Element => (
    <svg
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19 8h-2V5a1 1 0 0 0-1-1h-5V1a1 1 0 0 0-2 0v3H4a1 1 0 0 0-1 1v3H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8v3a1 1 0 1 0 2 0v-3h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM5 6h10v2H5V6Zm13 8H2v-4h16v4Z"
      />
    </svg>
)

export const IconSettings = ({ className }: IconsProps): JSX.Element => (
    <svg
      width={20}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="m19.32 7.55-1.89-.63.89-1.78A1 1 0 0 0 18.13 4L16 1.87a1 1 0 0 0-1.15-.19l-1.78.89-.63-1.89A1 1 0 0 0 11.5 0h-3a1 1 0 0 0-.95.68l-.63 1.89-1.78-.89A1 1 0 0 0 4 1.87L1.87 4a1 1 0 0 0-.19 1.15l.89 1.78-1.89.63A1 1 0 0 0 0 8.5v3a1 1 0 0 0 .68.95l1.89.63-.89 1.78A1 1 0 0 0 1.87 16L4 18.13a1 1 0 0 0 1.15.19l1.78-.89.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89 1.78.89a1 1 0 0 0 1.13-.19L18.13 16a1 1 0 0 0 .19-1.15l-.89-1.78 1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95ZM18 10.78l-1.2.4A2 2 0 0 0 15.64 14l.57 1.14-1.1 1.1-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2H9.22l-.4-1.2A2 2 0 0 0 6 15.64l-1.14.57-1.1-1.1.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4V9.22l1.2-.4A2 2 0 0 0 4.36 6l-.57-1.11 1.1-1.1L6 4.36A2 2 0 0 0 8.82 3.2l.4-1.2h1.56l.4 1.2A2 2 0 0 0 14 4.36l1.14-.57 1.1 1.1-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4v1.59ZM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      />
    </svg>
)

export const IconChat = ({ className }: IconsProps): JSX.Element => (
    <svg
      width={20}
      height={18}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.183 6.008 4.191.228A2.997 2.997 0 0 0 .143 2.243a3.002 3.002 0 0 0 .05 1.685l1.54 4.85-1.58 4.85a3.002 3.002 0 0 0 2.809 3.95c.394 0 .785-.078 1.15-.23l14.041-5.78a3 3 0 0 0 0-5.54l.03-.02Zm-14.801 9.47a1 1 0 0 1-1.06-.19 1 1 0 0 1-.27-1l1.46-4.51h13.722l-13.852 5.7Zm.13-7.7-1.49-4.47a1 1 0 0 1 .27-1 1 1 0 0 1 1.12-.23l13.822 5.7H3.51Z"
      />
    </svg>
)

export const IconTasks = ({ className }: IconsProps): JSX.Element => (
    <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        className={ className }
    >
        <path
        d="M19.158.188A13.208 13.208 0 0 0 16.99 0 13.017 13.017 0 0 0 10 2.027 13.018 13.018 0 0 0 3.01.05 13.21 13.21 0 0 0 .841.237 1 1 0 0 0 .243.58a.983.983 0 0 0-.23.646v11.866a.98.98 0 0 0 .35.767 1.002 1.002 0 0 0 .819.222 10.994 10.994 0 0 1 4.312.12c1.415.324 2.75.926 3.927 1.769l.12.07h.11a.918.918 0 0 0 .699 0h.11l.12-.07a10.933 10.933 0 0 1 3.914-1.826 10.991 10.991 0 0 1 4.324-.171 1.007 1.007 0 0 0 .819-.223.989.989 0 0 0 .35-.766V1.117a.983.983 0 0 0-.25-.609 1 1 0 0 0-.58-.32ZM9 13.33a12.955 12.955 0 0 0-5.992-1.464h-.998V1.978c.332-.02.666-.02.998 0 2.13-.003 4.215.616 5.992 1.78v9.572Zm8.988-1.424h-.998a12.957 12.957 0 0 0-5.992 1.463V3.758a10.923 10.923 0 0 1 5.992-1.78c.332-.02.666-.02.998 0v9.928Zm1.169 4.104a13.213 13.213 0 0 0-2.167-.188A13.017 13.017 0 0 0 10 17.849a13.017 13.017 0 0 0-6.99-2.027c-.727.003-1.452.066-2.168.188a1.004 1.004 0 0 0-.653.397.984.984 0 0 0-.176.74c.051.257.202.483.421.63.22.146.488.2.748.151a10.99 10.99 0 0 1 4.312.12c1.415.324 2.75.926 3.927 1.769a1.006 1.006 0 0 0 1.158 0 10.937 10.937 0 0 1 3.927-1.77 10.99 10.99 0 0 1 4.312-.119c.26.05.528-.005.747-.152a.988.988 0 0 0 .422-.63.98.98 0 0 0-.462-1.002 1.004 1.004 0 0 0-.367-.134Z"
        />
    </svg>
)

export const IconLogout = ({ className }: IconsProps): JSX.Element => (
    <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={ className }
    >
      <title>{'Log Out'}</title>
      <path
        d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40m64 160 80-80-80-80m-192 80h256"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
)
