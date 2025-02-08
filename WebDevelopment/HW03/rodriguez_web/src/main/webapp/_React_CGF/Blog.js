"use strict";

function Blog() {
    return (
        <div className="blog">
            <h2>
                Blog
            </h2>

            <p>
                <img src="pics/bluebooks.jpeg" style={{width : '40%', borderRadius : '0.5rem'}}/>
            </p>

            <h3>
                Server Page
            </h3>

            <p>
                If you want to see the <a href="list" target="_blank" id="list-link">list</a> of books that
                I'm reading click on the link provided. This list contains the following:
                Philosophy, Sci-Fi, Fantasy, Socio-economy, gender-theory, history, etc.
            </p>

            <h3>
                Proposed Database Table
            </h3>

            <p>Here are my proposed datatable for: Books</p>

            <ul>
                <li>
                    bookID: INT (Primary Key, Not Null, Unique)
                </li>
                <li>
                    BookName: Varchar(45) (Unique Name)
                </li>
                <li>
                    BookCover: Varchar(500) (URL that points to an image)
                </li>
                <li>
                    web_user_id (Reader): INT (Foreign Key)
                </li>
                <li>
                    book_published : Date | null (Optional)
                </li>
                <li>
                    reader_rate: Int(5) Integer | Null (Optional)
                </li>
                <li>
                    reader_have_read: boolean
                </li>
                <li>
                    book author: string
                </li>
                <li>
                    book_review_id: int | null
                </li>
            </ul>

            <h3>
                My Database Experience
            </h3>

            <p>
                I don't have much database experience. Except there was two instance.
                The first instance is when I was takng this coding bootcamp where it
                involves full-stack development. In this case we also used MySQL workbench.
                The second instance is my current job, where my responsibility is as a
                software developer, but it does not include much of databse experience.
                Although there was moments I had to use Golden, which is a query tool for
                Oracle databases. Which involves a little bit of SQL but nothing more than
                that.
            </p>

            <h3>
                My Web Development Experience
            </h3>

            <p>
                I have a lot of web development experience. I first used React framework
                as a start of my experience, I first did this on my own and then I worked
                on a task on a start up company (it failed). I was then lucky to find a job
                at Lockheed Martin as an Engineering Aide, which is the same resposibilty
                as a software developer but simply because “other” dI don't have a bachelor I can't
                be promoted without the proof of a piece of paper, but this at ok. I still
                work there since like 2.5 years now.
            </p>

            <h3>
                HW 1: Home Page
            </h3>

            <p>
                For this assignment, the only thing I found to be challenging was the designing
                of the database table as it has been a while since I designed a table. Another thing that
                I thought was challenging I had to figure out the css I have not used to seeing.
                Especially with the fact that most of the styling involves being brought with the
                framework used, in this case my job use Astro UXDS in which not much css is involved.
            </p>

            <h3>
                HW 2: Database Experience
            </h3>

            <p>
                As explained for the homework, I didn't have much database experience but I was familiar
                with MySQL Workbench. Through out doing this assignment I found most difficult with
                having to identify a unique form of field where every entry is unique, so I made a
                field where every rating also identify as a "review", but because some readers have not
                finished the book yet, then they can't do a review. So in a way this can be distinguished
                from book_id. Click <a target="_blank" href='docs/rodriguez_database.pdf'>here</a> to see my database document.
            </p>

            <h3>
                HW 3: Single Page Application
            </h3>

            <p>
                For this homework, I have also got used to the component and the code behind the React
                library. The only thing that confused me the most was really distinguishing the concept
                and the implementation of single page application. The part I found the easiest is
                having to move from the initial index to the current index. It was simply a copy and
                paste as nothing new is displayed, it is just in a component.
            </p>

            <p style={{textAlign:'center'}}>
                <img src="" style={{width : '40%', borderRadius : '0.5rem'}}/>
            </p>
        </div>
    );
}