export class Ticket {
    constructor(
        public Id,
        public ticket,
        public Department,
        public Concern,
        public Description,
        public Status,
        public Priority,
        public CreatedDate,
        public UpdatedDate,
        public UpdatedBy,
        public ResolvedBy,
        public AgeDays,
    ) { }
}
