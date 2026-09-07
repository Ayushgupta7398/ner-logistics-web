function ErrorState({
    message = "Something went wrong .Please try again.", onRetry,
}){
    return(
        <div className="error-state">
            <p>{message}</p>

            {onRetry &&(<button onClick={onRetry}>
                Retry
            </button>
        )}

        </div>
    );

}

export default ErrorState