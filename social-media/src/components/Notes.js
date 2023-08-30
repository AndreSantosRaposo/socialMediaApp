import { UserNote } from "./otherComponents/UserNote"

export function Notes(){
    return(
        <main className="notes">
            <section className="notes__noteCreator">
                <div className="notes__noteCreator__container">
                    <div className="notes__noteCreator__form">
                        <h2>Create note</h2>
                        <textarea rows={4} placeholder="Write your note"></textarea>
                    </div>
                    <div className="notes__noteCreator__buttons">
                        <button className="buttons">Post note</button>
                        <button className="buttons">Delete note</button>
                    </div>
                </div>
                <div className="notes__noteCreator__myNote">
                    <UserNote />
                </div>
            </section>
            <hr className="notes__divider"/>
            <div className="notes__noteContainer">
                <UserNote />
                <UserNote />
                <UserNote />
                <UserNote />
                <UserNote />
                <UserNote />
            </div>
        </main>
    )
}