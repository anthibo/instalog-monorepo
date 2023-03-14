import React from 'react'

export default function ActorAvatar({ actorInitials }: { actorInitials: string }) {
    return (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 inline-block mr-3">
            <div className="text-center text-white font-bold text-2xl">
                {actorInitials}
            </div>
        </div>
    )
}
