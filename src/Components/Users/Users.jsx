import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({totalUsersCount, pageSize, currentPage, onPageChange, followingInProgress, unFollow, follow, users, ...props}) => {
    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPageChanged={onPageChange}/>
            <div>
                {
                    users.map(u => <User user={u}
                                         followingInProgress={followingInProgress}
                                         unFollow={unFollow}
                                         follow={follow}
                                         key={u.id}/>
                    )}
            </div>
        </div>
    )
}


export default Users


