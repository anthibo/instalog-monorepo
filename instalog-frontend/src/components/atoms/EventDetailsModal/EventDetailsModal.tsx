import { Event } from '@/types/event.types'
import { Modal } from 'flowbite-react'
import moment from 'moment'
import React from 'react'

type EventDetailsModalProps = {
    event: Event
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
const headersClassNames = 'text-gray-600 text-xl'
const keysClassNames = 'text-gray-600 text-base'
const valuesClassNames = 'text-black text-base'
export default function EventDetailsModal({ event, showModal, setShowModal }: EventDetailsModalProps) {
    const { action, actor, occurred_at, target_name, location } = event
    return (
        <>
            <Modal
                dismissible={true}
                show={showModal}
                onClose={() => setShowModal(false)}
                className=''
            >
                <Modal.Body>
                    <div className="grid grid-cols-3 gap-4">
                        <div className={headersClassNames}>Actor</div>
                        <div className={headersClassNames} >Action</div>
                        <div className={headersClassNames}>Date</div>

                        <div className={keysClassNames}>Name: <span className={valuesClassNames}>{actor.name}</span></div>
                        <div className={keysClassNames}>Name: <span className={valuesClassNames}>{action.name}</span></div>
                        <div className={keysClassNames}>Readable: <span className={valuesClassNames}>{moment(occurred_at).format('LLL')}</span></div>

                        <div className={keysClassNames}>Email: <span className={valuesClassNames}>{actor.email}</span></div>
                        <div className={keysClassNames}>ID: <span className={valuesClassNames}>{action.id}</span></div>
                        <div></div>

                        <div className={keysClassNames}>ID: <span className={valuesClassNames}>{actor.id}</span></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-10">
                        <div className={headersClassNames} >Target</div>
                        <div className={headersClassNames}>Location</div>

                        <div className={keysClassNames}>Target name: <span className={valuesClassNames}>{target_name}</span></div>
                        <div className={keysClassNames}>IP: <span className={valuesClassNames}>{location}</span></div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
