class Header extends Component {
    render() {
        return (
            <div>
                <h2>Quizzes</h2>
                <ul>
                    <li>
                        <Link to="/quizzes/list">
                            Profiles
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings/attachment">
                            Attachment
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default