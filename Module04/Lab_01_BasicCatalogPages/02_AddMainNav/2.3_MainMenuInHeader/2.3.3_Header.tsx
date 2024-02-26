//...

  return (
    <header {/*...*/}>
      <div {/*...*/}>
        <h1>
          {/*...*/}
        </h1>
      </div>

      {/* START NEW CODE*/ }
      <div>
        {navCategories && (
          <ul className="flex">
            {navCategories.map(navItem => (
              <li key={navItem.path} className="mx-2 relative">
                <Link href={`/category${navItem.path}`}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* END NEW CODE */}
    </header>
  )

//...