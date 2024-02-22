function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 px-1.5 py-1 align-bottom text-sm text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900"
    />
  );
}

export function StuviaBadge() {
  return (
    <Badge href="https://www.stuvia.com">
      <svg
        width="18"
        height="18"
        viewBox="0 0 33 41"
        fill="none"
        role="img"
        aria-label="Stuvia logo"
        className="!mr-1"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 5.44816C0 2.9915 1.99149 1 4.44816 1H27.9599C30.4165 1 32.408 2.9915 32.408 5.44816V34.5518C32.408 37.0085 30.4165 39 27.9599 39H4.44816C1.99149 39 0 37.0085 0 34.5518V5.44816ZM22.1112 13.9061V13.3723C22.1112 10.1251 21.177 9.4579 16.5955 9.4579C11.2132 9.4579 10.1456 10.1251 10.1456 13.5057C10.1456 15.6408 10.6794 16.6194 12.1028 17.0643C12.7994 17.2691 13.0808 17.2853 16.7368 17.4952L17.752 17.5535C22.7339 17.8649 24.4242 18.1763 25.8476 19.1994C27.6714 20.4448 28.2941 22.1796 28.2941 25.9606C28.2941 29.7415 27.7604 31.6542 26.4704 32.9442C24.6911 34.6789 22.4226 35.1682 16.2396 35.1682C10.8573 35.1682 9.03359 34.8569 7.07641 33.7004C5.96437 33.0331 5.03024 31.6097 4.71885 30.0529C4.45201 28.7629 4.40751 27.8733 4.36302 25.5158H9.83423C9.83423 27.7398 9.96771 28.496 10.457 29.2522C11.1687 30.4532 11.8804 30.5867 16.5065 30.5867C19.8426 30.5867 20.7767 30.4532 21.6219 29.786C22.3781 29.2522 22.6895 28.0957 22.6895 26.0495C22.6895 24.0033 22.2446 23.1582 21.0436 22.7579C20.5691 22.58 18.6861 22.3872 15.3944 22.1796C10.3235 21.8683 9.256 21.6903 7.74363 20.9786C5.38607 19.8221 4.45201 17.687 4.45201 13.5947C4.45201 10.0806 5.20816 7.90104 6.80951 6.74451C8.63327 5.36556 10.9463 4.96524 16.462 4.96524C21.9777 4.96524 24.4242 5.54348 25.8921 7.18932C27.0486 8.47928 27.5824 10.2585 27.5824 12.8385V13.9061H22.1112Z"
          fill="#199BE9"
        />
      </svg>
      Stuvia
    </Badge>
  );
}
