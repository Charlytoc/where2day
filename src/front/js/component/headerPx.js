
<div className="row">
    <div className="col-3">
        <img
            className="profile-pic rounded-circle justify-content-center"
            width={150}
            height={150}
            src={store.profile.image_url}
            alt="profile"
        />
    </div>
    <div className="col-9 container">

        <div className="row">
            <div className="col-6">
                {store.profile.username === null ? <p><b>Elije Un Username</b></p> : <h5 className="profile-name text-black">{store.profile.username}</h5>}
            </div>

            <div className="col-6">
                <button className="btn navarra fa-regular" onClick={editProfile}>
                    <FontAwesomeIcon icon={faPen} />
                    Edit profile
                </button>
            </div>

            <div className="row">
                <div className="col-6">
                    {store.profile.nombre === null ? <p><b>Confirma Tu Nombre</b></p> : <h2> {store.profile.nombre}</h2>}
                </div>
                <div className="col-6"></div>
                {store.profile.pais === null ? <p><b>Elije Tu Ubicacion</b></p> : <h6 className="profile-name text-black">{store.profile.pais}</h6>}
            </div>

            <div className="row">
                <div className="col-6">
                    {store.profile.apellido === null ? <p><b>Confirma Tu Apellido</b></p> : <h2> {store.profile.apellido}</h2>}
                </div>
                <div className="col-6">
                    {store.profile.edad === null ? <p><b>Confirma Tu Edad</b></p> : <h2> {store.profile.edad}</h2>}
                </div>
            </div>

            <div className="row">
                {store.profile.correo === null ? <p><b>Confirma Tu eMail</b></p> : <h4> {store.profile.email}</h4>}
                <p> Change Your Password: ***** </p>
            </div>
        </div>
    </div>
</div>
